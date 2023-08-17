class CaixaDaLanchonete {
        
    constructor() {
        this.cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
    }
    
    calcularValorDaCompra(metodoDePagamento, itens) {

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        let valorTotal = 0;

     
        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            
            if (codigo === 'chantily') {
                let resultado = false;
                for (const item of itens) {
                    if (item.split(',')[0] === 'cafe') {
                        resultado = true;
                    }
                } 
                
                if (!resultado) {
                    return "Item extra não pode ser pedido sem o principal"
                }
            }

            if (codigo === 'queijo') {
                let resultado = false;
                for (const item of itens) {
                    if (item.split(',')[0] === 'sanduiche') {
                        resultado = true;
                    }
                } 
                
                if (!resultado) {
                    return "Item extra não pode ser pedido sem o principal"
                }
            }   

            if (parseInt(quantidade) === 0) {
                return 'Quantidade inválida!';
            }
    
            if (this.cardapio[codigo]) {
                valorTotal += this.cardapio[codigo] * parseInt(quantidade);
            } else {
                return 'Item inválido!';
            }
            
        }

        if (metodoDePagamento === 'credito') {
            valorTotal += valorTotal * 0.03; // Taxa de 3% para pagamento no crédito
        }

        if (metodoDePagamento === 'dinheiro') {
            const desconto = valorTotal * 0.05; // Desconto de 5%
            valorTotal -= desconto;
        }

        const formatarValor = valor => {
            return `R$ ${valor.toFixed(2).replace('.', ',')}`;
        };

        switch (metodoDePagamento) {
            case 'dinheiro':
                return formatarValor(valorTotal);
            case 'debito':
                return formatarValor(valorTotal);
            case 'credito':
                return formatarValor(valorTotal);
            default:
                return 'Forma de pagamento inválida!';
        }
    }
}

export { CaixaDaLanchonete };