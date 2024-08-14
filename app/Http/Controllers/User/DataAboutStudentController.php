<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\StudentParent;
use App\Models\StudentPrevSchool;
use App\Models\StudentRegister;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DataAboutStudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $user = Auth::user();



    //     if ($request->choice == 'wali') {
    //         $request->validate([
    //             'wali' => 'required',
    //             'wali_occupation' => 'required',
    //             'wali_phone' => 'required',
    //             'address_wali' => 'required',
    //             'gender' => 'required',
    //             'birth_date' => 'required',
    //             'address' => 'required',
    //             'name' => 'required',
    //         ], [
    //             'wali.required' => 'Wali harus diisi',
    //             'wali_occupation.required' => 'Pekerjaan harus diisi',
    //             'wali_phone.required' => 'Nomor telepon harus diisi',
    //             'address_wali.required' => 'Alamat harus diisi',
    //             'gender.required' => 'Jenis kelamin harus diisi',
    //             'birth_date.required' => 'Tanggal lahir harus diisi',
    //             'address.required' => 'Alamat siswa harus diisi',
    //             'name.required' => 'Asal Sekolah harus diisi',
    //         ]);

    //         $user->student->update([
    //             'name' => $request->name,
    //             'gender' => $request->gender,
    //             'birth_date' => $request->birth_date,
    //             'address' => $request->address,
    //         ]);

    //         // $studentParentWali = StudentParent::create([
    //         //     'wali' => $request->wali,
    //         //     'wali_occupation' => $request->wali_occupation,
    //         //     'wali_phone' => $request->wali_phone,
    //         //     'address_wali' => $request->address_wali,
    //         // ]);
    //     } else if ($request->choice == 'orang tua') {
    //         $request->validate([
    //             'father' => 'required',
    //             'father_occupation' => 'required',
    //             'father_phone' => 'required',
    //             'mother' => 'required',
    //             'mother_occupation' => 'required',
    //             'address_father' => 'required',
    //             'address_mother' => 'required',
    //             'mother_phone' => 'required',
    //             'gender' => 'required',
    //             'birth_date' => 'required',
    //             'address' => 'required',
    //             'name' => 'required',
    //         ], [
    //             'father.required' => 'Nama harus diisi',
    //             'father_occupation.required' => 'Pekerjaan harus diisi',
    //             'father_phone.required' => 'Nomor telepon harus diisi',
    //             'mother.required' => 'Ibu harus diisi',
    //             'mother_occupation.required' => 'Pekerjaan harus diisi',
    //             'address_father.required' => 'Alamat harus diisi',
    //             'address_mother.required' => 'Alamat harus diisi',
    //             'mother_phone.required' => 'Nomor telepon harus diisi',
    //             'gender.required' => 'Jenis kelamin harus diisi',
    //             'birth_date.required' => 'Tanggal lahir harus diisi',
    //             'address.required' => 'Alamat siswa harus diisi',
    //             'name.required' => 'Asal Sekolah harus diisi',
    //         ]);

    //         $studentParentOrangtua = StudentParent::create([
    //             'father' => $request->father,
    //             'father_occupation' => $request->father_occupation,
    //             'father_phone' => $request->father_phone,
    //             'mother' => $request->mother,
    //             'mother_occupation' => $request->mother_occupation,
    //             'address_father' => $request->address_father,
    //             'address_mother' => $request->address_mother,
    //             'mother_phone' => $request->mother_phone,
    //         ]);
    //     }

    //     // Create previous school record
    //     StudentPrevSchool::create([
    //         'name' => $request->name,
    //     ]);

    //     // Create student record
    //     Student::create([
    //         'gender' => $request->gender,
    //         'birth_date' => $request->birth_date,
    //         'address' => $request->address,
    //     ]);

    //     // Redirect back with success message
    //     return back()->with('success', 'Anda berhasil melengkapi data, silahkan lengkapi data lainnya');
    // }

    public function store(Request $request)
    {

        $user = Auth::user();
        $student = Student::where('user_id', $user->id)->first();

        if ($request->choice == 'wali') {
            $request->validate([
                'wali' => 'required',
                'wali_occupation' => 'required',
                'wali_phone' => 'required',
                'address_wali' => 'required',
                'gender' => 'required',
                'birth_date' => 'required',
                'address' => 'required',
                'name' => 'required',
            ], [
                'wali.required' => 'Wali harus diisi',
                'wali_occupation.required' => 'Pekerjaan harus diisi',
                'wali_phone.required' => 'Nomor telepon harus diisi',
                'address_wali.required' => 'Alamat harus diisi',
                'gender.required' => 'Jenis kelamin harus diisi',
                'birth_date.required' => 'Tanggal lahir harus diisi',
                'address.required' => 'Alamat siswa harus diisi',
                'name.required' => 'Asal Sekolah harus diisi',
            ]);

            $student->update([
                'name' => $request->name,
                'gender' => $request->gender,
                'birth_date' => $request->birth_date,
                'address' => $request->address,
            ]);

            $studentWali = StudentParent::find($student->student_parent_id);

            $studentWali->update([
                'wali' => $request->wali,
                'wali_occupation' => $request->wali_occupation,
                'wali_phone' => $request->wali_phone,
                'address_wali' => $request->address_wali,
                'choice' => $request->choice,
            ]);

            $studentPrevSchool = StudentPrevSchool::find($student->student_prev_school_id);

            $studentPrevSchool->update([
                'name' => $request->name,
            ]);
        } else if ($request->choice == 'orang tua') {
            $request->validate([
                'father' => 'required',
                'father_occupation' => 'required',
                'father_phone' => 'required',
                'mother' => 'required',
                'mother_occupation' => 'required',
                'address_father' => 'required',
                'address_mother' => 'required',
                'mother_phone' => 'required',
                'gender' => 'required',
                'birth_date' => 'required',
                'address' => 'required',
                'name' => 'required',
            ], [
                'father.required' => 'Nama harus diisi',
                'father_occupation.required' => 'Pekerjaan harus diisi',
                'father_phone.required' => 'Nomor telepon harus diisi',
                'mother.required' => 'Ibu harus diisi',
                'mother_occupation.required' => 'Pekerjaan harus diisi',
                'address_father.required' => 'Alamat harus diisi',
                'address_mother.required' => 'Alamat harus diisi',
                'mother_phone.required' => 'Nomor telepon harus diisi',
                'gender.required' => 'Jenis kelamin harus diisi',
                'birth_date.required' => 'Tanggal lahir harus diisi',
                'address.required' => 'Alamat siswa harus diisi',
                'name.required' => 'Asal Sekolah harus diisi',
            ]);

            $student->update([
                'name' => $request->name,
                'gender' => $request->gender,
                'birth_date' => $request->birth_date,
                'address' => $request->address,
            ]);

            $studentParentOrangtua = StudentParent::find($student->student_parent_id);

            $studentParentOrangtua->update([
                'father' => $request->father,
                'father_occupation' => $request->father_occupation,
                'father_phone' => $request->father_phone,
                'mother' => $request->mother,
                'mother_occupation' => $request->mother_occupation,
                'address_father' => $request->address_father,
                'address_mother' => $request->address_mother,
                'mother_phone' => $request->mother_phone,
                'choice' => $request->choice,
            ]);

            $studentPrevSchool = StudentPrevSchool::find($student->student_prev_school_id);

            $studentPrevSchool->update([
                'name' => $request->name,
            ]);
        }

        StudentRegister::create([
            'student_id' => $student->id,
            'school_year_id' => $request->school_year_id,
        ]);

        return back()->with('success', 'Anda berhasil melengkapi data, silahkan lengkapi data lainnya');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
