<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\StudentRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Expr\Cast\String_;

class StudentDocument extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        $studentRegister = StudentRegister::where('id', $request->id)->first();

        $request->validate([
            'kk' => 'required|image|mimes:jpeg,png,jpg',
            'akte' => 'required|image|mimes:jpeg,png,jpg',
            'ijazah_tk' => 'required|image|mimes:jpeg,png,jpg',
            'ktp' => 'required|image|mimes:jpeg,png,jpg',
        ], [
            'kk.required' => 'KK wajib diunggah',
            'akte.required' => 'Akte wajib diunggah',
            'ijazah_tk.required' => 'Ijazah TK wajib diunggah',
            'ktp.required' => 'KTP wajib diunggah',
            'kk.image' => 'File harus berupa gambar',
            'akte.image' => 'File harus berupa gambar',
            'ijazah_tk.image' => 'File harus berupa gambar',
            'ktp.image' => 'File harus berupa gambar',
            'kk.mimes' => 'File harus berformat jpeg, png, atau jpg',
            'akte.mimes' => 'File harus berformat jpeg, png, atau jpg',
            'ijazah_tk.mimes' => 'File harus berformat jpeg, png, atau jpg',
            'ktp.mimes' => 'File harus berformat jpeg, png, atau jpg',
        ]);

        if ($request->hasFile('kk')) {
            $kk = $request->file('kk');
            $filename = time() . '.' . $kk->getClientOriginalExtension();
            $path = 'kk/' . $filename;
            Storage::disk('public')->put($path, file_get_contents($kk));
            $studentRegister->update([
                'kk' => $path
            ]);
        }

        if ($request->hasFile('akte')) {
            $akte = $request->file('akte');
            $filename = time() . '.' . $akte->getClientOriginalExtension();
            $path = 'akte/' . $filename;
            Storage::disk('public')->put($path, file_get_contents($akte));
            $studentRegister->update([
                'akte' => $path
            ]);
        }

        if ($request->hasFile('ijazah_tk')) {
            $ijazah_tk = $request->file('ijazah_tk');
            $filename = time() . '.' . $ijazah_tk->getClientOriginalExtension();
            $path = 'ijazah_tk/' . $filename;
            Storage::disk('public')->put($path, file_get_contents($ijazah_tk));
            $studentRegister->update([
                'ijazah_tk' => $path
            ]);
        }

        if ($request->hasFile('ktp')) {
            $ktp = $request->file('ktp');
            $filename = time() . '.' . $ktp->getClientOriginalExtension();
            $path = 'ktp/' . $filename;
            Storage::disk('public')->put($path, file_get_contents($ktp));
            $studentRegister->update([
                'ktp' => $path
            ]);
        }

        $studentRegister->status = 'proses';
        $studentRegister->update();

        return back()->with('success', 'Data berhasil diunggah');
    }

    public function updateKK(Request $request, $id)
    {
        $studentRegister = StudentRegister::find($id);

        if (!$studentRegister) {
            return back()->with('error', 'Data tidak ditemukan');
        }

        if ($request->hasFile('kk')) {
            $kk = $request->file('kk');
            $filename = time() . '.' . $kk->getClientOriginalExtension();
            $path = 'kk/' . $filename;
            Storage::disk('public')->put($path, file_get_contents($kk));
            $studentRegister->kk = $path;
        }

        $studentRegister->status = 'proses';
        $studentRegister->note = null;
        $studentRegister->save();

        // Return a success response
        return back()->with('success', 'Kartu keluarga berhasil diunggah');
    }

    public function updateAkte(Request $request, $id)
    {
        $studentRegister = StudentRegister::find($id);

        if (!$studentRegister) {
            return back()->with('error', 'Data tidak ditemukan');
        }

        if ($request->hasFile('akte')) {
            $akte = $request->file('akte');
            $filename = time() . '.' . $akte->getClientOriginalExtension();
            $path = 'akte/' . $filename;
            Storage::disk('public')->put($path, file_get_contents($akte));
            $studentRegister->akte = $path;
        }

        $studentRegister->status = 'proses';
        $studentRegister->note = null;
        $studentRegister->save();

        return back()->with('success', 'Akte Kelahiran berhasil diunggah');
    }

    public function updateIjazah(Request $request, $id)
    {
        $studentRegister = StudentRegister::find($id);

        if (!$studentRegister) {
            return back()->with('error', 'Data tidak ditemukan');
        }

        if ($request->hasFile('ijazah_tk')) {
            $ijazah_tk = $request->file('ijazah_tk');
            $filename = time() . '.' . $ijazah_tk->getClientOriginalExtension();
            $path = 'ijazah_tk/' . $filename;
            Storage::disk('public')->put($path, file_get_contents($ijazah_tk));
            $studentRegister->ijazah_tk = $path;
        }

        $studentRegister->status = 'proses';
        $studentRegister->note = null;
        $studentRegister->save();

        return back()->with('success', 'Ijazah TK berhasil diunggah');
    }

    public function updateKTP(Request $request, $id)
    {
        $studentRegister = StudentRegister::find($id);

        if (!$studentRegister) {
            return back()->with('error', 'Data tidak ditemukan');
        }

        if ($request->hasFile('ktp')) {
            $ktp = $request->file('ktp');
            $filename = time() . '.' . $ktp->getClientOriginalExtension();
            $path = 'ktp/' . $filename;
            Storage::disk('public')->put($path, file_get_contents($ktp));
            $studentRegister->ktp = $path;
        }

        $studentRegister->status = 'proses';
        $studentRegister->note = null;
        $studentRegister->save();

        return back()->with('success', 'KTP berhasil diunggah');
    }
}
