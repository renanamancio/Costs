<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            ['name' => 'Naruto Uzumaki', 'email' => 'estoucerto@konoha.com', 'password' => bcrypt('123456'), 'authorization' => 'admin'],
            ['name' => 'Sasuke Uchiha', 'email' => 'renegado@konoha.com', 'password' => bcrypt('123456'), 'authorization' => 'user'],
            ['name' => 'Luffy', 'email' => 'elastico@pirata.com', 'password' => bcrypt('123456'), 'authorization' => 'user'],
        ];
        foreach ($users as $user) {
            DB::table('users')->insert($user);
        }
    }
}
