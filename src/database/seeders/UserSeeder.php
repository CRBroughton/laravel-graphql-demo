<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->count(5)->create()
            ->each(function($user) {
                Post::create([
                    'author_id' => $user->id,
                    'title' => fake()->title(),
                    'content' => fake()->text()
                ]);
            });
    }
}