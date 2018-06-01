<?php

namespace App\Http\Controllers\api;
use App\Accept;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\AcceptResource;
class AcceptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users=Accept::all();
        return AcceptResource::collection($users);
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
        $accept=$request->isMethod('put') ? Accept::findorFail
        ($request->id) : new Accept;

        $accept->fund_id=$request->input('fund_id');
        $accept->public_key=$request->input('public_key');
        $accept->name=$request->input('name');
        $accept->email=$request->input('email');
        $accept->amount=$request->input('amount');

        if($accept->save()){
            return response()->json('Successfully added');
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
        $user=Accept::findorFail($id);

        return new AcceptResource($user);
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
        $user=Accept::findorFail($id);
        if($user->delete()){
        return new AcceptResource($user);
        }
    }
}
