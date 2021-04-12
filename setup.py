# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in lead_management/__init__.py
from lead_management import __version__ as version

setup(
	name='lead_management',
	version=version,
	description='Lead Management Mobile App',
	author='info@erptech.in',
	author_email='info@erptech.in',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
