from pydantic import BaseModel
from typing import Literal

# Pydantic schema for creating a user
class UserCreate(BaseModel):
    name: str
    email: str
    status: Literal["active", "suspended", "inactive"] = "active"  # Restrict values directly
    exams_taken: int = 0

    class Config:
        from_attributes = True