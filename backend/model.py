from sqlalchemy import  Column, Integer, String,float,create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import foreign_key, datetime
from datetime import datetime
Base = declarative_base()
class Product(Base):
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    price = Column(float, nullable=False)
    description = Column(String, nullable=True)
class Order(Base):
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, foreign_key('products.id'))
    quantity = Column(Integer, nullable=False)
    order_date = Column(datetime, default=datetime.utcnow)
class User(Base):
    __tablename__ = 'users'
    id = Column(String, primary_key=True)
class sessionConv(Base):
    __tablename__ = 'sessions'
    id = Column(Integer, primary_key=True)
    user_id = Column(String, foreign_key('users.id'))
    start_time = Column(datetime, default=datetime.utcnow)
    end_time = Column(datetime, nullable=True)

    class Message(Base):
        __tablename__ = 'messages'
        id = Column(Integer, primary_key=True)
        session_id = Column(Integer, foreign_key('sessions.id'))
        sender-=column(String)
        text = Column(String)
        timestamp = Column(datetime, default=datetime.utcnow)
engine = create_engine('sqlite:///example.db')
session= sessionmaker(bind=engine)
Base.metadata.create_all(engine)      