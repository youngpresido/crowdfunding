<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    protected function sendLoginResponse(Request $request){
        $request->session()->regenerate();
        $this->clearLoginAttempts($request);
        $user->$this->guard()->users();
        if($this->authenticated($request,$user)){
            return response()->json([
                'success'=>true,
                'user'=>$user
            ], 200);
        }        
    }
    protected function authenticated(Request $request, $user){
        return true;
    }
    protected function sendFailedLoginResponse(Request $request){
        return response()->json([
            'success'=>false,
            'message'=>trans('auth.failed')
        ], 422);
    }
}
