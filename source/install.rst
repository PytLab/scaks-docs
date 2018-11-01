Installation
============

*catynetics* Installation
-------------------------

catynetics can be installed in different ways. In current version, catynetics
has no C or C++ backend code, therefore it can be easily installed even
from source code.

Prerequisite
~~~~~~~~~~~~

As catynetics provides a higher level Message Passing Interfaces, you need
to install an implementation of MPI on your machine before installing
mpi4py.

MPI implementations: 1. `MPICH <https://www.mpich.org/>`__ 2.
`OpenMPI <https://www.open-mpi.org/>`__ 3. `Microsoft
MPI <https://docs.microsoft.com/en-us/message-passing-interface/microsoft-mpi>`__

Via Pip (Recommended)
~~~~~~~~~~~~~~~~~~~~~

.. code:: shell

   pip install catynetics

From source
~~~~~~~~~~~

.. code:: shell

   git clone --recursive https://github.com/PytLab/catynetics.git
   cd catynetics
   python setup.py install

Installation check
~~~~~~~~~~~~~~~~~~

To ensure you have installed correctly on your machine, try to import
``catynetics`` in Python shell:

.. code:: python

   >>> import catynetics

For developers
^^^^^^^^^^^^^^

We also provide unit tests for developers, if you have clone the
repository, just

.. code:: shell

   cd catynetics/tests
   python catynetics_test.py

catynetics-Hub Installation
---------------------------

Install and run catynetics-Hub example locally
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Clone the repository:

.. code:: shell

   git clone --recursive git@github.com:PytLab/catynetics-hub.git

Run the catynetics-hub:

.. code:: shell

   cd catynetics-hub/example
   ../catynetics-hub runserver

Your browser will open automatically, if not, open your browser and
visit http://localhost:5000

|image0|

.. |image0| image:: ./_static/hub-screenshot.png

