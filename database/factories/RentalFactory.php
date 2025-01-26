<?php

namespace Database\Factories;

use App\Models\MusicalInstrument;
use App\Models\Rental;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class RentalFactory extends Factory
{
  /**
   * Nama model yang terkait dengan factory ini.
   */
  protected $model = Rental::class;

  /**
   * Definisi data dummy.
   */
  public function definition(): array
  {
    // Ambil ID user yang sudah ada secara acak
    $userId = User::inRandomOrder()->first()->id;

    // Ambil ID alat musik yang sudah ada secara acak
    $instrumentId = MusicalInstrument::inRandomOrder()->first()->id;

    return [
      'user_id' => $userId, // Gunakan ID user yang sudah ada
      'musical_instrument_id' => $instrumentId, // Gunakan ID alat musik yang sudah ada
      'is_rented' => $this->faker->randomElement([true, false]), // Status acak
    ];
  }
}
