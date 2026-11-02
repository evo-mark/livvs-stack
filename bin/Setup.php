<?php

namespace Bin;

use Composer\Script\Event;

class Setup
{
    public static function handle(Event $event)
    {
        $io = $event->getIO();
        $host = 'packagist.evomark.co.uk';
        $path = dirname(__DIR__).'/auth.json';
        $auth = is_file($path) ? json_decode(file_get_contents($path), true) : [];

        if (getenv('COMPOSER_AUTH') || isset($auth['http-basic'][$host]['password']) || ! $io->isInteractive()) {
            return;
        }

        $io->write('You can generate tokens at https://packagist.evomark.co.uk/organizations/evomark/settings/tokens');
        $token = trim((string) $io->askAndHideAnswer('What is your EvoMark Packagist token? '));

        if ($token === '') {
            throw new \RuntimeException('A token is required.');
        }

        $auth['http-basic'][$host] = [
            'username' => 'token',
            'password' => $token,
        ];

        file_put_contents(
            $path,
            json_encode($auth, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES).PHP_EOL
        );

        // Composer read auth.json before this hook ran, so the running process needs the credentials directly
        $io->setAuthentication($host, 'token', $token);

        $io->write('auth.json has been updated');
    }
}
