class Todo < ActiveRecord::Base
  validates :title, :body, presence: true
  validates :completed, inclusion: { in: [true, false] }
end
