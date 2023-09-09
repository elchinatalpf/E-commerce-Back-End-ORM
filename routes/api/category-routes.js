const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories, be sure to include its associated Products
router.get('/', async (req, res) => {
try {
  const categoryData = await Category.findAll({
    include: [{ model: Product }],
  });
  if (!categoryData) {
    res.status(404).json({ message: 'Category not foudned', error: err.message});
    return;
  }
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

// find one category by its `id` value, be sure to include its associated Products
router.get('/:id', async (req, res) => {
try {
  const catId = await Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  });
  if (!catId) {
    res.status(404).json({ message: 'Category ID not founded', error: err.message });
  }
  res.status(200).json(catId);
} catch (err) {
  res.status(500).json(err);
}
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const newCat = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateValue = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateValue);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  
});

module.exports = router;
