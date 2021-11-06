module.exports = function ({ models }) {

	const Currencies = models.use('Currencies');


	async function getAll(...data) {

		var where, attributes;

		for (const i of data) {

			if (typeof i != 'object') throw global.getText("currencies", "needObjectOrArray");

			if (Array.isArray(i)) attributes = i;

			else where = i;

		}

		try { return (await Currencies.findAll({ where, attributes })).map(e => e.get({ plain: true })) }

		catch (error) {

			console.error(error);

			throw new Error(error);

		};

	}



	async function getData(userID) {

		try {

			const data = await Currencies.findOne({ where: { userID }});

			if (data) return data.get({ plain: true });

			else return false;

		} 

		catch (error) {

			console.error(error);

			throw new Error(error);

		};

	}



	async function setData(userID, options = {}) {

		if (typeof options! = 'object' &&! Array.isArray (options)) ném global.getText ("currency", "needObject");

		cố gắng {

			(chờ Currencies.findOne ({where: {userID}})). update (tùy chọn);

			trả về true;

		} 

		bắt (lỗi) {

			console.error (lỗi);

			ném Error (lỗi) mới;

		}

	}



	chức năng async delData (userID) {

		cố gắng {

			(chờ Currencies.findOne ({where: {userID}})). tiêu diệt ();

			trả về true;

		}

		bắt (lỗi) {

			console.error (lỗi);

			ném Error (lỗi) mới;

		}

	}



	async function createData (userID, defaults = {}) {

		if (typeof defaults! = 'object' &&! Array.isArray (defaults)) ném global.getText ("currency", "needObject");

		cố gắng {

			chờ đợi Currencies.findOrCreate ({where: {userID}, defaults});

			trả về true;

		}

		bắt (lỗi) {

			console.error (lỗi);

			ném Error (lỗi) mới;

		}

	}



	chức năng không đồng bộ tăngMoney (userID, tiền) {

		if (typeof money! = 'number') ném global.getText ("currency", "needNumber");

		cố gắng {

			let balance = (await getData(userID)).money;

			await setData(userID, { money: balance + money });

			return true;

		}

		catch (error) {

			console.error(error);

			throw new Error(error);

		}

	}



	async function decreaseMoney(userID, money) {

		if (typeof money != 'number') throw global.getText("currencies", "needNumber");

		try {

			let balance = (await getData(userID)).money;

			if (balance < money) return false;

			await setData(userID, { money: balance - money });

			return true;

		} catch (error) {

			console.error(error);

			throw new Error(error);

		}

	}



	return {

		getAll,

		getData,

		setData,

		delData,

		createData,

		increaseMoney,

		decreaseMoney

	};

};
