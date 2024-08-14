<?php

namespace App\Http\Middleware;

use App\Models\PaymentDetail;
use App\Models\SchoolYear;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        $schoolYear = SchoolYear::with('scheduleRegister')->where('is_active', true)->first();

        if ($schoolYear) {
            $schoolYear->first_date_formatted = \Carbon\Carbon::parse($schoolYear->scheduleRegister->first_date)->translatedFormat('d F Y');
            $schoolYear->last_date_formatted = \Carbon\Carbon::parse($schoolYear->scheduleRegister->last_date)->translatedFormat('d F Y');
        }
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? $request->user()->load('student') : null,
            ],
            'flash' => [
                'error' => fn () => $request->session()->get('error'),
                'success' => fn () => $request->session()->get('success'),
            ],

            'schoolYear' => fn () => $schoolYear,

        ]);
    }
}
