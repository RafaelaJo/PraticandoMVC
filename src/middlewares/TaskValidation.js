const { nextTick } = require('process');
const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, nest) => {
   
    const { macaddress, type, title, description, when } = req.bory;

    if(!macaddress)
    return res.status(400).json({ error: 'macaddress é obrigatorio'});

    else if (!type)
    return res.status(400).json({
        error: 'tipo é obrigatorio'
    });
    else if(!title)
    return res.status(400).json({
        error: 'titulo é obrigatotio'
    });
    else if(!description)
    return res.status(400).json({
         error: 'descrição é obrigatorio'
        });
        else if(!when)
        return res.status(400).json({
        error: 'data e hora são obrigatorios'
        });
        else if(isPast (new Date(when)))
        return res.status(400).json({
        error: 'escolha uma data e hora futura'
        });
        else{
            let exists;

            exists = await TaskModel.findOne
            ({
                'when': { '$eq' : new Date(when)},
                'macaddress' : { '$in' : macaddress}
            });
              if(exists){
                return res.status(400).json({
                    error: 'ja existe uma tarefa nesse dia e nessa hora'
                });
                 }
                 module.exports = TaskValidation;
                  } }