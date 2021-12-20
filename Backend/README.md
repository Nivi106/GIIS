
# Local dev

## How to start

1. Install pipenv to handle the virtual environment
```brew install pipenv```

2. Install geos and gdal to use geodjango
```brew install geos gdal```

3. Create and activate virtualenv
```commandline
python3 -m venv ./venv/
source ./venv/bin/activate
```

4. Install dependencies
```commandline
pipenv install
```

5. Up postgres database
```commandline
docker run --name=postgis_s -d -e POSTGRES_USER=postgres -e POSTGRES_PASS=postgres -e POSTGRES_DBNAME=emergencies -p 5432:5432 kartoza/postgis:9.6-2.4
```

6. Run server
```djangourlpath
./manage.py runserver
```

## How to start on windows

1. Download and install gdal : 

   Download file:  https://www.lfd.uci.edu/~gohlke/pythonlibs/#gdal
   
   Install: ```python -m pip install path-to-wheel-file.whl```
   
   
2. Create and activate virtualenv
```commandline
python3 -m venv ./venv/
.\venv\Scripts\activate
```

3. Install dependencies
```commandline
python -m pip install -r requirements.txt
```

4. Up postgres database
```commandline
docker run --name=postgis_s -d -e POSTGRES_USER=postgres -e POSTGRES_PASS=postgres -e POSTGRES_DBNAME=emergencies -p 5432:5432 kartoza/postgis:9.6-2.4
```

5. Change paths in Backend/config/settings.py and check the database details

*GDAL_LIBRARY_PATH='C:/Users/User/Desktop/Geoinformation in Society/GIIS/venv/Lib/site-packages/osgeo/gdal303.dll'*
*GEOS_LIBRARY_PATH='C:/Users/User/Desktop/Geoinformation in Society/GIIS/venv/Lib/site-packages/osgeo/geos_c.dll'*

6. Run Server
```djangourlpath
python manage.py runserver
```

## Important commands

Create and execute migrations
```djangourlpath
./manage.py makemigrations
./manage.py migrate
```
