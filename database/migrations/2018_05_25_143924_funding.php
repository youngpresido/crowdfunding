<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Funding extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);
        Schema::create('funding', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')
            ->references('id')->on('users')
            ->onDelete('cascade');
            $table->string('title');
            $table->string('desciption');
            $table->string('picture')->nullable();
            $table->string('video')->nullable();
            $table->string('public_key');
            $table->string('private_key');
            $table->string('date');
            $table->string('amount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('funding');
    }
}
