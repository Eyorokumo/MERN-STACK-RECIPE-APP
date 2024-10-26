




/**
 * GET/
 * Homepage
 */
exports.homepage = async(req, res) => {
    res.render('index',{title: 'Smart Cooking Blog-Home Made Dishes'} );
    };
