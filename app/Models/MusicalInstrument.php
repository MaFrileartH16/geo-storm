<?php

namespace App\Models;

use Database\Factories\MusicalInstrumentFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MusicalInstrument extends Model
{
  /** @use HasFactory<MusicalInstrumentFactory> */
  use HasFactory;

  protected $fillable = [
    'name',
  ];

  public function rentals()
  {
    return $this->hasMany(Rental::class);
  }
}
