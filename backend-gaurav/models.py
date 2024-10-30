
from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime
from database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    registration_date = Column(DateTime, default=datetime.utcnow)
    status = Column(String, nullable=False, default="active")  # Store status as a string
    exams_taken = Column(Integer, default=0)