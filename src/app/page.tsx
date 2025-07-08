import Hero from './sections/hero/Hero';
import Conceito_da_linha from './sections/conceito_da_linha/Conceito_da_linha';
import Conheca_os_cortes from './sections/conheca_os_cortes/Conheca_os_cortes';
import Onde_encontrar from './sections/onde_encontrar/Onde_encontrar';
import Carrosel_de_receitas from './sections/carrossel_de_receitas/Carrossel_de_receitas'



export default function Home() {
  return (
    <main>
      <Hero />
      <Conceito_da_linha />
      <Conheca_os_cortes />
      <Carrosel_de_receitas />
      <Onde_encontrar />
    </main>
  );
}
