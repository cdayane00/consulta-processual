import data from "../data.json" assert {type: "json"};

export default class dataController{
    static getCnj = async(req,res) => {

        const {cnj} = req.params;

        try{
            let cont = 0;

            for (let i = 0; i < data.length; i++) {
                if(data[i].cnj === cnj){
                    res.status(200).json(data[i]);
                }
                else{
                    cont++;
                }  
            }

            if(cont === data.length){
                return res.status(404).json({
                    error: 'CNJ not found'
                });
            }
        }

        catch(error){
            response.status(500).json({
                error: error.message
            });
        }
    };
}