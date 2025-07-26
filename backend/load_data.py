import pandas as pd
from models import products, orders, Session

df_p=pd.read_csv('path/products.csv')
df_o=pd.read_csv('path/orders.csv')
s=session()
for _, r in df_p.iterrows():
    
    s.add(products(
        id=r['id'],name=r['name'],stock=r['stock']))
for _, r in df_o.iterrows():
    s.add(orders(
        order_id=r['order_id'],product_id=r['product_id'],status=r['status']))
    
    s.commit()

