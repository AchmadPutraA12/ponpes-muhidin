<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\StudentRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileDocController extends Controller
{

    public function destroykk(Request $request)
    {

        $studentRegister = StudentRegister::where('kk', $request->kk)->first();
        $studentRegister->update([
            'kk' => null
        ]);

        Storage::disk('public')->delete($request->kk);

        return back()->with('success', 'KK berhasil Dihapus');
    }


    public function destroyakte(Request $request)
    {

        $studentRegister = StudentRegister::where('akte', $request->akte)->first();
        $studentRegister->update([
            'akte' => null
        ]);

        Storage::disk('public')->delete($request->akte);

        return back()->with('success', 'Akte berhasil Dihapus');
    }


    public function destroyijazah(Request $request)
    {

        $studentRegister = StudentRegister::where('ijazah_tk', $request->ijazah_tk)->first();
        $studentRegister->update([
            'ijazah_tk' => null
        ]);


        Storage::disk('public')->delete($request->ijazah_tk);

        return back()->with('success', 'Ijazah TK berhasil Dihapus');
    }


    public function destroyktp(Request $request)
    {

        $studentRegister = StudentRegister::where('ktp', $request->ktp)->first();
        $studentRegister->update([
            'ktp' => null
        ]);

        Storage::disk('public')->delete($request->ktp);

        return back()->with('success', 'KTP berhasil Dihapus');
    }
}
