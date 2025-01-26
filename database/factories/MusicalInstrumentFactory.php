<?php

namespace Database\Factories;

use App\Models\MusicalInstrument;
use Illuminate\Database\Eloquent\Factories\Factory;

class MusicalInstrumentFactory extends Factory
{
  /**
   * Nama model yang terkait dengan factory ini.
   */
  protected $model = MusicalInstrument::class;

  /**
   * Definisi data dummy.
   */
  public function definition(): array
  {
    return [
      'name' => $this->faker->word, // Nama alat musik acak
    ];
  }
}
