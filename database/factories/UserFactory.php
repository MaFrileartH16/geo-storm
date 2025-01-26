<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<User>
 */
class UserFactory extends Factory
{
  /**
   * The current password being used by the factory.
   */
  protected static ?string $password;

  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    $fullName = $this->faker->firstName() . ' ' . $this->faker->lastName();
    $email = strtolower(str_replace(' ', '.', $fullName)) . '@geostorm.id';

    return [
      'name' => $fullName,
      'email' => $email,
      'email_verified_at' => now(),
      'password' => $email,
      'remember_token' => Str::random(10),
      'role' => $this->faker->randomElement(['Admin', 'Borrower']),
    ];
  }

  /**
   * Indicate that the model's email address should be unverified.
   */
  public function unverified(): static
  {
    return $this->state(fn(array $attributes) => [
      'email_verified_at' => null,
    ]);
  }
}
