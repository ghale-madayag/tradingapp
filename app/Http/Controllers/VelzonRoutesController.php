<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class VelzonRoutesController extends Controller
{
    //

    public function dashboard()
    {
        return Inertia::render('dashboards/ecommerce/index');
    }

    public function pages_starter() {
        return Inertia::render('pages/starter');
    }

    public function pages_maintenance() {
        return Inertia::render('pages/maintenance');
    }

    public function pages_coming_soon() {
        return Inertia::render('pages/coming-soon');
    }

    public function auth_signin_basic() {
        return Inertia::render('auth-pages/signin/basic');
    }

    public function auth_signin_cover() {
        return Inertia::render('auth-pages/signin/cover');
    }

    public function auth_signup_basic() {
        return Inertia::render('auth-pages/signup/basic');
    }

    public function auth_signup_cover() {
        return Inertia::render('auth-pages/signup/cover');
    }

    public function auth_reset_pwd_basic() {
        return Inertia::render('auth-pages/reset/basic');
    }

    public function auth_reset_pwd_cover() {
        return Inertia::render('auth-pages/reset/cover');
    }

    public function auth_create_pwd_basic() {
        return Inertia::render('auth-pages/create/basic');
    }

    public function auth_create_pwd_cover() {
        return Inertia::render('auth-pages/create/cover');
    }

    public function auth_lockscreen_basic() {
        return Inertia::render('auth-pages/lockscreen/basic');
    }

    public function auth_lockscreen_cover() {
        return Inertia::render('auth-pages/lockscreen/cover');
    }

    public function auth_twostep_basic() {
        return Inertia::render('auth-pages/twostep/basic');
    }

    public function auth_twostep_cover() {
        return Inertia::render('auth-pages/twostep/cover');
    }

    public function auth_404() {
        return Inertia::render('auth-pages/errors/404');
    }

    public function auth_500() {
        return Inertia::render('auth-pages/errors/500');
    }

    public function auth_404_basic() {
        return Inertia::render('auth-pages/errors/404-basic');
    }

    public function auth_404_cover() {
        return Inertia::render('auth-pages/errors/404-cover');
    }

    public function auth_ofline() {
        return Inertia::render('auth-pages/errors/ofline');
    }

    public function auth_logout_basic() {
        return Inertia::render('auth-pages/logout/basic');
    }

    public function auth_logout_cover() {
        return Inertia::render('auth-pages/logout/cover');
    }

    public function auth_success_msg_basic() {
        return Inertia::render('auth-pages/success-msg/basic');
    }

    public function auth_success_msg_cover() {
        return Inertia::render('auth-pages/success-msg/cover');
    }

}
