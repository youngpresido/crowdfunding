<?php

namespace App\Http\Controllers\api;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UsersResource as Usr;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users=User::all();
        return Usr::collection($users);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user=$request->isMethod('put') ? User::findorFail
        ($request->id) : new User;

        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->password=\Hash::make($request->input('password'));
        

        if($user->save()){
            return response()->json([
                "status"=>200,
                "message"=>"you have successfully registered"
            ]);
        }
        else{
            return response()->json([
                    "status"=>405,
                    "message"=>"it failed"
        ]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user=User::findorFail($id);

        return new Usr($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user=User::whereId($id)->first();
        if($user->delete()){
        return new Usr($user);
        }
    }
}
