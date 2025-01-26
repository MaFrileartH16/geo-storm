<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rental extends Model
{
  use HasFactory;

  /**
   * Kolom yang dapat diisi (fillable).
   */
  protected $fillable = [
    'user_id',
    'musical_instrument_id',
    'is_rented',
  ];

  /**
   * Relasi ke model User.
   */
  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  /**
   * Relasi ke model MusicalInstrument.
   */
  public function musicalInstrument(): BelongsTo
  {
    return $this->belongsTo(MusicalInstrument::class);
  }
}
