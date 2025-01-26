<?php

namespace Database\Seeders;

use App\Models\MusicalInstrument;
use Illuminate\Database\Seeder;

class MusicalInstrumentSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    MusicalInstrument::factory()->count(10)->create();
  }
}
