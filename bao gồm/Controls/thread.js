module.exports = function ({ models, api }) {

	const Threads = models.use('Threads');


	async function getInfo(threadID) {

		try {

			const result = await api.getThreadInfo(threadID);

			return result;

		}

		catch (error) { 

			console.log(error);

			throw new Error(error);

		};

	}



	async function getAll(...data) {

		var where, attributes;

		for (const i of data) {

			if (typeof i != 'object') throw global.getText("threads", "needObjectOrArray");

			if (Array.isArray(i)) attributes = i;

			else where = i;

		}

		try { return (await Threads.findAll({ where, attributes })).map(e => e.get({ plain: true })); }

		catch (error) {

			console.error(error);

			throw new Error(error);

		}

}



	async function getData(threadID) {

		try {

			const data = await Threads.findOne({ where: { threadID }});

			if (data) return data.get({ plain: true });

			else return false;

		} 

		bắt (lỗi) { 

			console.error (lỗi);

            ném Error (lỗi) mới;

		}

	}



	async function setData (threadID, options = {}) {

		if (typeof options! = 'object' &&! Array.isArray (options)) ném global.getText ("thread", "needObject");

		cố gắng {

			(đang chờ Threads.findOne ({where: {threadID}})). update (tùy chọn);

			trả về true;

		} catch (error) { 

			cố gắng{

				chờ this.createData (threadID, các tùy chọn);



			} catch (error) {

				console.error (lỗi);

				ném Error (lỗi) mới;

			}

			

		}

	}



	hàm async delData (threadID) {

		cố gắng {

			(đang chờ Threads.findOne ({where: {threadID}})). tiêu diệt ();

			trả về true;

		}

		bắt (lỗi) {

			console.error (lỗi);

			ném Error (lỗi) mới;

		}

	}



	async function createData (threadID, defaults = {}) {

		if (typeof defaults != 'object' && !Array.isArray(defaults)) throw global.getText("threads", "needObject");

		try {

			await Threads.findOrCreate({ where: { threadID }, defaults });

			return true;

		}

		catch {

			console.error(error);

			throw new Error(error);

		}

	}



	return {

		getInfo,

		getAll,

		getData,

		setData,

		delData,

		createData

	};

};
