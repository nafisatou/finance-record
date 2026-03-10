const Transaction = require('../models/transaction');

// Mock the pool
jest.mock('../config/database', () => ({
  query: jest.fn()
}));

const pool = require('../config/database');

describe('Transaction Model', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('create method should call pool.query with correct parameters', async () => {
    const mockResult = { rows: [{ id: 1, type: 'income', category: 'salary', amount: 1000, description: 'Monthly salary', date: '2023-01-01' }] };
    pool.query.mockResolvedValue(mockResult);

    const result = await Transaction.create({ type: 'income', category: 'salary', amount: 1000, description: 'Monthly salary', date: '2023-01-01' });

    expect(pool.query).toHaveBeenCalledWith(
      "INSERT INTO transactions (type, category, amount, description, date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      ['income', 'salary', 1000, 'Monthly salary', '2023-01-01']
    );
    expect(result).toEqual(mockResult.rows[0]);
  });

  test('getAll method should call pool.query and return rows', async () => {
    const mockResult = { rows: [{ id: 1, type: 'income' }] };
    pool.query.mockResolvedValue(mockResult);

    const result = await Transaction.getAll();

    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM transactions ORDER BY date DESC");
    expect(result).toEqual(mockResult.rows);
  });
});
