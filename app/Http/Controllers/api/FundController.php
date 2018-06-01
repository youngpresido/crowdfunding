<?php

namespace App\Http\Controllers\api;
use App\Funding;
use App\Http\Resources\FundResource as fund;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users=Funding::all();
        return fund::collection($users);
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
        $fund=$request->isMethod('put') ? Funding::findorFail
        ($request->id) : new Funding;

        $fund->user_id=$request->input('user_id');
        $fund->title=$request->input('title');
        $fund->desciption=$request->input('desciption');
        $fund->picture=$request->input('picture');
        $fund->video=$request->input('video');
        $fund->public_key=uniqid();
        $fund->private_key=uniqid();
        $fund->date=$request->input('date');
        $fund->amount=$request->input('amount');

        if($fund->save()){
            return response()->json([
                "status"=>"Successfully added"

            ],200);
        }else{
            return response()->json([
                "status"=>"Successfully added"

            ],405);
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
        $user=Funding::findorFail($id);

        return new fund($user);
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
        $user=Funding::findorFail($id);
        if($user->delete()){
        return new fund($user);
        }
    }
}
