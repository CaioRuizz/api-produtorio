function recursivo(m, n) {
    if (!m || !n) return null;
    if (m > n) return null;
    if (m < 0 || n < 0) return null;

    if (m < n) {
        proximo = recursivo(m + 1, n);
        atual = m + (1 / m);
        
        return atual * proximo;
    }

    return m + (1 / m);
}

function iterativo(m, n) {
    if (!m || !n) return null;
    if (m > n) return null;
    if (m < 0 || n < 0) return null;

    let resultado = 1;
    let i = m;
    while (i <= n){
        resultado *= i + (1 / i);
        i++;
    }
    return resultado;
}

module.exports = {
    async recursivo(req, res) {
        const { m, n } = req.body;
    
        const resultado = recursivo(m, n);

        if (!resultado) {
            return res.status(400).json({
                metodo: 'recursivo',
                resultado: null,
            })
        }

        const response = {
            metodo: 'recursivo',
            resultado: resultado,
        }
  
        return res.json(response)
    },

    async iterativo(req, res) {
        const { m, n } = req.body;
    
        const resultado = iterativo(m, n);

        if (!resultado) {
            return res.status(400).json({
                metodo: 'iterativo',
                resultado: null,
            })
        }

        const response = {
            metodo: 'iterativo',
            resultado: resultado,
        }
  
        return res.json(response)
    },
}