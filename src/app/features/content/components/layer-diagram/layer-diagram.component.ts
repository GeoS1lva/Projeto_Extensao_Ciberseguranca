import { Component } from '@angular/core';

interface Layer {
  label: string;
  icon: string;
  title: string;
  description: string;
  colorClass: string;
}

@Component({
  selector: 'app-layer-diagram',
  standalone: false,
  templateUrl: './layer-diagram.component.html',
  styleUrls: ['./layer-diagram.component.scss']
})
export class LayerDiagramComponent {
  layers: Layer[] = [
    {
      label: 'CAMADA 1',
      icon: 'ti-wall',
      title: 'Perímetro — Firewall & IDS',
      description: 'Primeira barreira. Filtra tráfego suspeito antes de chegar à rede interna. Detecta padrões de ataque conhecidos.',
      colorClass: 'layer--green'
    },
    {
      label: 'CAMADA 2',
      icon: 'ti-network',
      title: 'Rede — Segmentação & VPN',
      description: 'Divide a rede em zonas isoladas. Um invasor que compromete um segmento não acessa automaticamente os outros.',
      colorClass: 'layer--blue'
    },
    {
      label: 'CAMADA 3',
      icon: 'ti-device-laptop',
      title: 'Endpoint — Antivírus & EDR',
      description: 'Monitora comportamentos suspeitos em dispositivos. EDR detecta ataques sem assinatura conhecida (zero-day) por análise comportamental.',
      colorClass: 'layer--amber'
    },
    {
      label: 'CAMADA 4',
      icon: 'ti-database-lock',
      title: 'Dados — Criptografia & Backup',
      description: 'Última linha de defesa. Mesmo que tudo acima falhe, dados criptografados e backups isolados preservam a informação e permitem recuperação.',
      colorClass: 'layer--red'
    }
  ];
}
