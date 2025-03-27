<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class CopyAssociadoImages extends Command
{
    protected $signature = 'associados:copy-images';
    protected $description = 'Copia as imagens de associados para a pasta uploads';

    public function handle()
    {
        $origem = public_path('images/associados');
        $destino = public_path('uploads/images');

        // Criar diretório de destino, se não existir
        if (!File::exists($destino)) {
            File::makeDirectory($destino, 0755, true);
        }

        // Pega todas as imagens e copia para a nova pasta
        $arquivos = File::files($origem);
        foreach ($arquivos as $arquivo) {
            $nomeArquivo = $arquivo->getFilename();
            File::copy($arquivo->getPathname(), "$destino/$nomeArquivo");
        }

        $this->info('Todas as imagens foram copiadas com sucesso!');
    }
}
