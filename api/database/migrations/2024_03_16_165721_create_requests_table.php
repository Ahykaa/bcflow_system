<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->timestamp('created_at')->useCurrent();
            $table->date('date_needed');
            $table->integer('user_id');
            $table->integer('department_id');
            $table->string('request_for');
            $table->text('notes')->nullable();
            $table->integer('quantity');
            $table->integer('unit_id');
            $table->string('description');
            $table->decimal('unitCost');
            $table->decimal('amount');
            $table->text('remarks')->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('requests');
    }
};
