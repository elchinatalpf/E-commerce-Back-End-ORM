const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
// find all tags, be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// check this later
router.get("/:id", async (req, res) => {
  // find a single tag by its `id`, be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      
      include: [{ model: Product }]
    });
    if (!tagData) {
      res.status(404).json({ message: "Tag ID not found!" });
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.status(200).json(tagData);
  }catch (err) {
    res.status(500).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: 'No id Tag was founded' });
      return;
    }
    res.status(200).json(tagData);
  }catch (err) {
    res.status(500).json(err);
  }

});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  
});

module.exports = router;
