<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Console\Command;

use function Laravel\Prompts\text;
use function Laravel\Prompts\confirm;
use function Laravel\Prompts\password;
use Illuminate\Contracts\Console\PromptsForMissingInput;

class MakeUser extends Command implements PromptsForMissingInput
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:user {email}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email');

        $firstName = text(
            label: 'What is the first name?',
            placeholder: 'E.g. John',
        );

        $lastName = text(
            label: 'What is the last name?',
            placeholder: 'E.g. Doe',
        );

        $password = password(
            label: 'Please choose a password?',
            placeholder: 'password',
            hint: 'Minimum 6 characters.'
        );

        $verifyEmail = confirm('Verify the email address now?');

        $admin = new User([
            'first_name' => $firstName,
            'last_name' => $lastName,
            'email' => $email,
        ]);

        $admin->password = $password;

        if ($verifyEmail) {
            $admin->email_verified_at = Carbon::now();
        }
        $admin->save();

        $this->info('Admin "' . $admin->full_name . '" has been created');
    }
}
