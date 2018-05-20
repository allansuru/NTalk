
var alertNode = require("alert-node")

module.exports = (app) => {
    const ContatosController = {
      index(req, res) {
        const { usuario } = req.session;
        const { contatos } = usuario;
        console.log('Controller Contatos:', usuario);
        
        res.render('contatos/index', { usuario, contatos });
      },
      create(req, res) {
        const { contato } = req.body;
        const { usuario } = req.session;
         if (contato.nome != '' && contato.email) {
          usuario.contatos.push(contato);
          res.redirect('/contatos');  
         } else {
          alertNode('Nome e email obrigatórios');
         }
      },
      show(req, res) {
        const { id } = req.params;
        const { usuario } = req.session;
        const contato = usuario.contatos[id];
        res.render('contatos/show', { id, contato });  
      },
      edit(req, res) {
        const { id } = req.params;
        const { usuario } = req.session;
        const contato = usuario.contatos[id];
        console.log(req.params);
        res.render('contatos/edit', { id, contato, usuario });
      },
      update(req, res) {
        const { contato } = req.body;
        const { usuario } = req.session;
        usuario.contatos[req.params.id] = contato;
        res.redirect('/contatos');
      },
      destroy(req, res) {
        const { id } = req.params;
        const { usuario } = req.session;
        usuario.contatos.splice(id, 1);
        res.redirect('/contatos');
      }
    };
    return ContatosController;
  };