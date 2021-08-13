export interface DataProps {
  codigo_empresa: string;
  nome_empresa: string;
  porcentagem: number;
  favorito?: boolean;
}

export interface DataEmpresa {
  favorito: boolean;
  nome_empresa: string;
  codigo_empresa: string;
  porcentagem: number;
  valor_acao: number;
  valor_variacao_dinheiro: number;
}

export const DataEmpresaInitialData = {
  favorito: false,
  nome_empresa: '',
  codigo_empresa: '',
  porcentagem: 0,
  valor_acao: 0,
  valor_variacao_dinheiro: 0
}

export interface DataGrafico {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export function corrigeValor(valor: number) {
  return parseFloat((valor).toFixed(2));
}
