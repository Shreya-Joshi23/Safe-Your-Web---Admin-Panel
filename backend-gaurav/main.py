# main.py
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine,SessionLocal
import models
from schema import *
import models

# Initialize FastAPI app
app = FastAPI()

# Create tables in the database
models.Base.metadata.create_all(bind = engine)

# Dependency for getting a DB session
def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()
    


@app.post("/users/")
def create_user(request: UserCreate, db: Session = Depends(get_db)):
    db_user = models.User(
        name=request.name,
        email=request.email,
        status=request.status,
        exams_taken=request.exams_taken
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get('/users/')
def get_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return users