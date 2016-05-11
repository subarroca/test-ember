import Ember from 'ember';

var data = {
	fitxes:{
	  cols:{
	    col:[
	      {
	        content:"Abrera",
	        id:"080018",
	        scheme:"mun"
	      },
	      {
	        content:"Baix Llobregat",
	        id:"11",
	        scheme:"com"
	      },
	      {
	        content:"Catalunya",
	        id:"09",
	        scheme:"ca"
	      }
	    ]
	  },
	  gg:{
	    g:[
	      {
	        id:"g173",
	        c:"Territori"
	      },
	      {
	        id:"g168",
	        c:"Població"
	      },
	      {
	        id:"g171",
	        c:"Habitatges i llars"
	      },
	      {
	        id:"g163",
	        c:"Macromagnituds i impostos"
	      },
	      {
	        id:"g170",
	        c:"Sectors econòmics"
	      },
	      {
	        id:"g169",
	        c:"Treball"
	      },
	      {
	        id:"g172",
	        c:"Cultura i esports"
	      },
	      {
	        id:"g174",
	        c:"Eleccions"
	      },
	      {
	        id:"g205",
	        c:"Medi ambient"
	      }
	    ]
	  },
	  p:"id=080018",
	  o:"dades",
	  lang:"ca",
	  version:"1.00"
	}
};


export default Ember.Route.extend({
	model() {
		var fitxes = data.fitxes;

		var model = {
			location: fitxes.cols.col.map((info) => {
        return info.content;
      }),
			info: fitxes.gg.g
		}
		return model;
	}
});
