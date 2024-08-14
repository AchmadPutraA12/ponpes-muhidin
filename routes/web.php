<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\DetailPaymentController;
use App\Http\Controllers\Admin\Extracurricular;
use App\Http\Controllers\Admin\FileDocController;
use App\Http\Controllers\Admin\ScheduleRegisterController;
use App\Http\Controllers\Admin\SchoolYearController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\DataAboutStudentController;
use App\Http\Controllers\User\PaymentController;
use App\Http\Controllers\User\StudentDocument;
use App\Http\Controllers\WelcomeController;
use App\Models\PaymentDetail;
use App\Models\SchoolYear;
use Carbon\Carbon;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::resource('/', WelcomeController::class)->names('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::resource('/tentang-kami', AboutUsController::class)->names('tentang-kami');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', "role:user", 'verified'])->group(function () {
    Route::resource('/dashboard', DashboardController::class)->names('user.dashboard');
    Route::resource('/lengkapi-data', DataAboutStudentController::class)->names('user.data-about-student');
    Route::resource('/lengkapi-dokumen', StudentDocument::class)->names('user.student-document');
    Route::resource('/download/pdf', PaymentController::class)->names('user.payment');
    Route::put('ubah/kk/{id}', [StudentDocument::class, 'updatekk'])->name('user.update.kk');
    Route::put('ubah/akte/{id}', [StudentDocument::class, 'updateAkte'])->name('user.update.akte');
    Route::put('ubah/ktp/{id}', [StudentDocument::class, 'updateKTP'])->name('user.update.ktp');
    Route::put('ubah/ijazah/{id}', [StudentDocument::class, 'updateIjazah'])->name('user.update.ijazah');
});

Route::prefix('admin')->middleware(['auth', "role:admin"])->group(function () {
    Route::resource('dashboard', AdminDashboardController::class)->names('admin.dashboard');
    Route::resource('ekstrakulikuler', Extracurricular::class)->names('admin.extracurricular');
    Route::resource('detail-pembayaran', DetailPaymentController::class)->names('admin.detail-payment');
    Route::resource('tahun-ajaran', SchoolYearController::class)->names('admin.school-year');
    Route::patch('/tahun-ajaran/update-status/{id}', [SchoolYearController::class, 'updateStatus'])->name('admin.extracurricular.update-status');
    Route::resource('/jadwal-pendaftaran', ScheduleRegisterController::class)->names('admin.schedule-register');
    Route::resource('siswa', StudentController::class)->names('admin.student');
    Route::resource('transaksi', TransactionController::class)->names('admin.transaction');
    Route::put('transaksi/update-nis/{id}', [TransactionController::class, 'updateNIS'])->name('admin.transaction.update-nis');
    Route::delete('file/{id}/kk', [FileDocController::class, 'destroykk'])->name('admin.file.kk');
    Route::delete('file/{id}/akte', [FileDocController::class, 'destroyakte'])->name('admin.file.akte');
    Route::delete('file/{id}/ijazah', [FileDocController::class, 'destroyijazah'])->name('admin.file.ijazah');
    Route::delete('file/{id}/ktp', [FileDocController::class, 'destroyktp'])->name('admin.file.ktp');
});


require __DIR__ . '/auth.php';
