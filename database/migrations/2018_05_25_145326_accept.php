<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Accept extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accept', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('funding_id')->unsigned();
            
            
            $table->string('name');
            $table->string('amount');
            $table->string('email');
            $table->timestamps();

            $table->foreign('funding_id')->references('id')
            ->on('funding')->onDelete('cascade');

          
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accept');
    }
}
