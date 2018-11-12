Installation
============

*scaks* Installation
-------------------------

scaks can be installed in different ways. In current version, scaks
has no C or C++ backend code, therefore it can be easily installed even
from source code.

Prerequisite
~~~~~~~~~~~~

As scaks provides a higher level Message Passing Interfaces, you need
to install an implementation of MPI on your machine before installing
mpi4py.

MPI implementations: 1. `MPICH <https://www.mpich.org/>`__ 2.
`OpenMPI <https://www.open-mpi.org/>`__ 3. `Microsoft
MPI <https://docs.microsoft.com/en-us/message-passing-interface/microsoft-mpi>`__

Via Pip (Recommended)
~~~~~~~~~~~~~~~~~~~~~

.. code:: shell

   pip install scaks

From source
~~~~~~~~~~~

.. code:: shell

   git clone --recursive https://github.com/PytLab/scaks.git
   cd scaks
   python setup.py install

Installation check
~~~~~~~~~~~~~~~~~~

To ensure you have installed correctly on your machine, try to import
``scaks`` in Python shell:

.. code:: python

   >>> import scaks

For developers
^^^^^^^^^^^^^^

We also provide unit tests for developers, if you have clone the
repository, just

.. code:: shell

   cd scaks/tests
   python scaks_test.py

scaks-Hub Installation
---------------------------

Install and run scaks-Hub example locally
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Clone the repository:

.. code:: shell

   git clone --recursive git@github.com:PytLab/scaks-hub.git

Run the scaks-hub:

.. code:: shell

   cd scaks-hub/example
   ../scaks-hub runserver

Your browser will open automatically, if not, open your browser and
visit http://localhost:5000

|image0|

.. |image0| image:: ./_static/hub-screenshot.png

