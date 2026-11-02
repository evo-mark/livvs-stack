<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use function Laravel\Prompts\password;

class LivvsSetup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'livvs:setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Setup the LIVVS installation';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $token = password(
            label: 'What is your EvoMark Packagist token?',
            required: true,
            hint: "You can generate these at https://packagist.evomark.co.uk/organizations/evomark/settings/tokens"
        );

        $path = base_path('auth.json');
        $auth = is_file($path) ? json_decode(file_get_contents($path), true) : [];

        $auth['http-basic']['packagist.evomark.co.uk'] = [
            'username' => 'token',
            'password' => $token,
        ];

        file_put_contents(
            $path,
            json_encode($auth, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL
        );

        $this->info('LIVVS is now ready to go');
    }
}
