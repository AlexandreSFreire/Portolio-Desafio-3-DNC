import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineOppositeContent fontWeight={800}>
            2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent fontWeight={600} fontSize={16}>
            Nesse mesmo ano, finalizei o SENAI, o ensino médio e comecei minha carreira profissonal na área da industria, como montador. No final do ano, me matriculei na faculdade de Ciências da Computação na universidade Anhembi Morumbi.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent fontWeight={800}>
            2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent fontWeight={600} fontSize={16}>
            Devido a quarentena, tive que trancar a faculdade, optando em continuar meus estudos por conta, fazendo cursos e aprendendo novas linguagens de programação e continuei crescendo dentro da empresa da qual trabalhava, dessa vez, atuando no setor de usinagem.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent fontWeight={800}>
            2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent fontWeight={600} fontSize={16}>
            Consegui a oportunidade mais uma promoção, mas dessa vez, ao invés de atuar no setor fabril, atuar no setor de desenvolvimento de projetos, como desenhista industrial, onde passei a desenvolver e aprimorar máquinas e linhas de produção, participando de reuniões e realizando visitas técnicas em clientes.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent fontWeight={800}>
            2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent fontWeight={600} fontSize={16}>
            Atualmente, me matriculei na faculdade de analise e desenvolvimento de sistemas na faculdade Descomplica, além de estar cursando Desenvolvedor Full-Stack na DNC. Buscando novas oportunidades para ingressar na área de desenvolvimento web.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
