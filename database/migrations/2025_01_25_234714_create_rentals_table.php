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
    Schema::create('rentals', function (Blueprint $table) {
      $table->id(); // Primary key
      $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign key ke tabel users
      $table->foreignId('musical_instrument_id')->constrained('musical_instruments')->onDelete('cascade'); // Foreign key ke tabel musical_instruments
      $table->string('is_rented'); // Status peminjaman (pending, approved, returned, cancelled)
      $table->timestamps(); // created_at dan updated_at
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('rentals');
  }
};
