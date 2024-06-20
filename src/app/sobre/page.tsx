'use client';
import {
  Box,
  Breadcrumbs,
  Container,
  CssBaseline,
  Link,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  styled,
} from '@mui/material';
import * as React from 'react';
import theme from './theme';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <br></br>
        <br></br>
        <Box sx={{ height: '100vh' }}>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="#sobre-nos">
                Sobre Nós
              </Link>
              <Link underline="hover" color="inherit" href="#missao">
                Missão
              </Link>
              <Link underline="hover" color="inherit" href="#projeto">
                O Projeto
              </Link>
              <Link underline="hover" color="inherit" href="#valores">
                Valores
              </Link>
            </Breadcrumbs>
          </div>
          <Stack spacing={7}>
            <ThemeProvider theme={theme}>
              <Item id="sobre-nos">
                <Typography variant="h3" gutterBottom>
                  Sobre nós
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Quem Somos
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Somos um grupo de estudantes do terceiro semestre da faculdade, unidos por um
                  objetivo comum: utilizar a tecnologia para melhorar a qualidade de vida em nossa
                  comunidade.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Nosso Projeto
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Como parte do nosso curso, estamos desenvolvendo o projeto Respire Bem, que visa
                  monitorar a qualidade do ar em diferentes bairros da nossa cidade.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Tecnologia Utilizada
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Nosso projeto utiliza o Arduino para coletar dados sobre os poluentes presentes no
                  ar, permitindo-nos identificar áreas com níveis críticos de poluição e buscar
                  soluções eficazes. Acreditamos que, através da tecnologia e da ciência, podemos
                  fazer a diferença e promover um ambiente mais saudável para todos.
                </Typography>
              </Item>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
              <Item id="missao">
                <Typography variant="h3" gutterBottom>
                  Nossa Missão
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Objetivo Principal
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Nosso principal objetivo é fornecer informações acessíveis sobre a qualidade do ar
                  que respiramos diariamente.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Ação Concreta
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Acreditamos que, ao compreender melhor a distribuição e os níveis de poluição em
                  diferentes áreas, podemos incentivar a comunidade e os responsáveis pelas
                  políticas públicas a tomar medidas concretas para melhorar o ambiente urbano.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Acesso à Informação
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Queremos que cada cidadão tenha acesso a dados confiáveis e em tempo real sobre a
                  qualidade do ar em sua região. Com essa informação, esperamos promover ações que
                  reduzam a poluição e melhorem a saúde e o bem-estar de todos. Nossa missão é
                  clara: usar a tecnologia para capacitar a comunidade e proteger nosso meio
                  ambiente.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Compromisso com a Comunidade
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Nosso compromisso é com a transparência e a melhoria contínua. Estamos
                  constantemente aprimorando nossos métodos e expandindo nossa rede de monitoramento
                  para fornecer informações precisas e relevantes à comunidade. Junte-se a nós nesta
                  jornada para um futuro mais limpo e saudável!
                </Typography>
              </Item>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Item id="projeto">
                <Typography variant="h3" gutterBottom>
                  O Projeto
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Sensores e Coleta de Dados
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Para alcançar nossa missão, utilizamos sensores baseados em Arduino, capazes de
                  detectar diversos poluentes atmosféricos. Esses sensores são instalados em pontos
                  estratégicos de diferentes bairros para coletar dados detalhados sobre a qualidade
                  do ar.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Análise e Visualização de Dados
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Os dados coletados são enviados para uma plataforma online, onde são analisados e
                  visualizados de forma clara e intuitiva. Essa plataforma permite que qualquer
                  pessoa acompanhe em tempo real a qualidade do ar em sua região, facilitando a
                  identificação de áreas com altos níveis de poluição e promovendo a conscientização
                  sobre a importância de um ambiente saudável.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Objetivo do Projeto
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Nosso objetivo é fornecer informações acessíveis e precisas para que a comunidade
                  e os responsáveis por políticas públicas possam tomar decisões informadas e
                  eficazes. Através da tecnologia, queremos capacitar nossa comunidade a agir e
                  melhorar a qualidade de vida de todos.
                </Typography>
              </Item>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
              <Item id="valores">
                <Typography variant="h3" gutterBottom>
                  Nossos Valores
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Educação e Consciência Ambiental
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Queremos educar a população sobre a importância da qualidade do ar e como ela
                  afeta nossa saúde e bem-estar.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Transparência
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Todos os dados coletados serão disponibilizados publicamente, promovendo a
                  transparência e permitindo que todos possam acessar e entender as informações.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Ação Comunitária
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Acreditamos no poder da comunidade em fazer a diferença. Propostas como o plantio
                  de árvores em áreas mais poluídas são exemplos de ações que podemos tomar juntos
                  para melhorar nosso ambiente.
                </Typography>
              </Item>
            </ThemeProvider>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
