<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('musical_instruments', function (Blueprint $table) {
      $table->id(); // Primary key
      $table->string('name'); // Nama alat musik
      $table->timestamps(); // created_at dan updated_at
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('musical_instruments');
  }
};
