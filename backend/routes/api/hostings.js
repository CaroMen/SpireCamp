const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');

const { Hosting, User, State, Activities_List, Review, Activity, Accommodations_List, Accommodations } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        let hostings = await Hosting.findAll({
            include: [Accommodations]
        });

        res.json(hostings);
    })
);

router.get(
    '/:id',
    asyncHandler(async (req, res, next) => {
        let hostId = parseInt(req.params.id, 10);
        let hosting = await Hosting.findByPk(hostId, {
            include: [User, Activity, State, Accommodations]
        }
        );
        let reviews = await Review.findAll({
            include: { model: User }
        });
        res.json({ hosting, reviews });
    })
);

module.exports = router;
